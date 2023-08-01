package travel;
import java.sql.*;

public class DbConnection  {
	private static String url="jdbc:mysql://localhost:3306/tavel_expense_tracker";
	private static String user="root";
	private static String pass="#Sahana12";
	
	static Connection getConnection() throws SQLException {
		return DriverManager.getConnection(url,user,pass);
	}
}
