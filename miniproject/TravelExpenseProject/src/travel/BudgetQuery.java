package travel;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class BudgetQuery extends BudgetDao{
	@Override
	public void getAllBudget(int travelId) throws SQLException {
		String query="Select * from budgetList where travelId="+travelId;
		Connection con=DbConnection.getConnection();
		Statement st=con.createStatement();
		ResultSet rs=st.executeQuery(query);
		
		while(rs.next()) {
			System.out.println("CATEGORY:  "+rs.getString(2)+"|| Total Amount: "+rs.getInt(3)+" || Balance: "+rs.getInt(4));
		}
		con.close();
	}
	@Override
	public boolean insertValues(String categoryName,int budgetAlloted,int travelId) throws SQLException {
		String query="INSERT INTO budgetList(categoryName,budgetAlloted,travelId,remainingAmount) VALUES (?,?,?,?);";
		Connection con=DbConnection.getConnection();
		PreparedStatement pst=con.prepareStatement(query);
		pst.setString(1, categoryName);
		pst.setInt(2,budgetAlloted);
		pst.setInt(3, travelId);
		pst.setInt(4,budgetAlloted);
		int rows=pst.executeUpdate();
		con.close();
		if(rows==1) {
			return true;
		}
		return false;
	}
	@Override
	public boolean checkCategory(String category,int travelId) throws SQLException {
		String query="select count(categoryName) from budgetList where categoryName=?  and travelId=?;";
		Connection con=DbConnection.getConnection();
		PreparedStatement pst=con.prepareStatement(query);
		pst.setString(1, category);
		pst.setInt(2,travelId);
		ResultSet rs=pst.executeQuery();
		if(rs.next()&& rs.getInt(1)==1) {
			con.close();
			return true;
		}
		con.close();
		return false;
	}
	@Override
	public int getBudgetId(String categoryName,int travelId) throws SQLException {
		String query="Select budgetId from budgetList where categoryName=? && travelId=?;";
		Connection con=DbConnection.getConnection();
		PreparedStatement pst=con.prepareStatement(query);
		pst.setString(1, categoryName);
		pst.setInt(2, travelId);
		ResultSet rs=pst.executeQuery();
		if(rs.next()) {
			return rs.getInt(1);
		}
		return -1;
	}
	@Override
	public int getTotalExpense(int travelId) throws SQLException {
		String query="select sum(budgetAlloted) from budgetList where travelId=?;";
		Connection con=DbConnection.getConnection();
		PreparedStatement pst=con.prepareStatement(query);
		pst.setInt(1,travelId);
		ResultSet rs=pst.executeQuery();
		if(rs.next()) {
			return rs.getInt(1);
		}
		con.close();
		return -1;
	}
	@Override
	public ResultSet getBudgetList(int travelId) throws SQLException {
		String query="select budgetId from budgetList where travelId=?;";
		Connection con=DbConnection.getConnection();
		PreparedStatement pst=con.prepareStatement(query);
		pst.setInt(1,travelId);
		ResultSet rs=pst.executeQuery();
		return rs;
	}
	@Override
	public String getCategoryById(int budgetId) throws SQLException {
		String query="select categoryName from budgetList where budgetId=?;";
		Connection con=DbConnection.getConnection();
		PreparedStatement pst=con.prepareStatement(query);
		pst.setInt(1,budgetId);
		ResultSet rs=pst.executeQuery();
		if(rs.next()) {
			return rs.getString(1);
		}
		con.close();
		return "0";
	}
	@Override
	public int getMoneyAllotedById(int budgetId) throws SQLException {
		String query="select budgetAlloted from budgetList where budgetId=?;";
		Connection con=DbConnection.getConnection();
		PreparedStatement pst=con.prepareStatement(query);
		pst.setInt(1,budgetId);
		ResultSet rs=pst.executeQuery();
		if(rs.next()) {
			return rs.getInt(1);
		}
		con.close();
		return 0;
	}
	@Override
	public void updateBudgetExpense(int spent,int budgetId) throws SQLException{
		String query="update budgetlist set remainingAmount= remainingAmount-? where budgetId=?";
		Connection con=DbConnection.getConnection();
		PreparedStatement pst=con.prepareStatement(query);
		pst.setInt(1, spent);
		pst.setInt(2,budgetId);
		int rs=pst.executeUpdate();
		con.close();
	}
}
