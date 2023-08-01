package travel;
import java.sql.*;
public class TravelInfoQuery implements TravelDao{
	@Override
	public void getAllTravelInfo() throws SQLException {
		String query="Select * from travelInfo";
		Connection con=DbConnection.getConnection();
		Statement st=con.createStatement();
		ResultSet rs=st.executeQuery(query);
		
		while(rs.next()) {
			System.out.println("Id : "+rs.getInt(1)+" | User name : "+rs.getString(2)+" | Travel place1 : "+rs.getString(3));
		}
		con.close();
	}
	@Override
	public int insertTravelValues(String userName,String travelPlace,int totalBudget) throws SQLException {
		String query="INSERT INTO travelInfo(userName,travelPlace,totalExpense,remainingExpense) VALUES (?,?,?,?)";
		Connection con=DbConnection.getConnection();
		PreparedStatement pst=con.prepareStatement(query);
		pst.setString(1, userName);
		pst.setString(2,travelPlace);
		pst.setInt(3, totalBudget);
		pst.setInt(4, totalBudget);
		int rows=pst.executeUpdate();
		con.close();
		if(rows==1) {
			return getTravelId(userName);
		}
		return 0;
	}
	@Override
	public int getTravelId(String userName) throws SQLException {
		String query="Select travelId from travelInfo where userName=?;";
		Connection con=DbConnection.getConnection();
		PreparedStatement pst=con.prepareStatement(query);
		pst.setString(1, userName);
		ResultSet rs=pst.executeQuery();
		if(rs.next()) {
			return rs.getInt(1);
		}
		return -1;
	}
	@Override
	public void deepAnalysis(int travelId) throws SQLException {
		BudgetQuery budget=new BudgetQuery();
		ExpenseQuery expense=new ExpenseQuery();
		ResultSet budgetList=budget.getBudgetList(travelId);
		System.out.println("Category        || MoneyAlloted      || MoneySpent      || MoneyLeft       || PercentSpent     || PercentRemaining");
		while(budgetList.next()) {
			String category=budget.getCategoryById(budgetList.getInt(1));
			int moneyalloted=budget.getMoneyAllotedById(budgetList.getInt(1));
			int moneySpent=expense.getAnalysisDetails(budgetList.getInt(1),travelId);
			double remainingper=((moneyalloted-moneySpent)*100)/moneyalloted;
			System.out.printf(category+"    "+moneyalloted+"    "+moneySpent+"    "+(moneyalloted-moneySpent)+"    %.2f       %.2f\n",remainingper,100-remainingper);
		}
	}
	@Override
	public void updateRemainingAmount(int spent,int travelId) throws SQLException{
		String query="update travelinfo set remaingExpense= remainingExpense-? where travelId=?";
		Connection con=DbConnection.getConnection();
		PreparedStatement pst=con.prepareStatement(query);
		pst.setInt(1, spent);
		pst.setInt(2,travelId);
		int rs=pst.executeUpdate();
		con.close();
	}
}
