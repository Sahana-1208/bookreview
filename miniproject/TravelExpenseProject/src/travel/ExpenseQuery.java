package travel;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class ExpenseQuery {
	public boolean insertValues(String categoryName,int moneySpent,int budgetId,int travelId) throws SQLException {
		String query="INSERT INTO ExpenseList(categoryName,moneySpent,budgetId,travelId) VALUES (?,?,?,?);";
		Connection con=DbConnection.getConnection();
		PreparedStatement pst=con.prepareStatement(query);
		pst.setString(1, categoryName);
		pst.setInt(2,moneySpent);
		pst.setInt(3, budgetId);
		pst.setInt(4, travelId);
		int rows=pst.executeUpdate();
		con.close();
		if(rows==1) {
			return true;
		}
		return false;
	}
	public int getAmountSpent(int travelId) throws SQLException {
		String query="select sum(moneySpent) from expenseList where travelId=?;";
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
	public int getAnalysisDetails(int budgetId,int travelId) throws SQLException {
		String query="select moneySpent from expenseList where budgetId=? and travelId=?;";
		Connection con=DbConnection.getConnection();
		PreparedStatement pst=con.prepareStatement(query);
		pst.setInt(1,budgetId);
		pst.setInt(2, travelId);
		ResultSet rs=pst.executeQuery();
		if(rs.next()) {
			return rs.getInt(1);
		}
		con.close();
		return 0;
	}
}
