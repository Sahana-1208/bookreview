package travel;

import java.sql.ResultSet;
import java.sql.SQLException;

public abstract class BudgetDao {
	public abstract void getAllBudget(int travelId) throws SQLException;
	public abstract boolean insertValues(String categoryName,int budgetAlloted,int travelId) throws SQLException;
	public abstract boolean checkCategory(String category,int travelId) throws SQLException ;
	public abstract int getBudgetId(String categoryName,int travelId) throws SQLException;
	public abstract int getTotalExpense(int travelId) throws SQLException;
	public abstract ResultSet getBudgetList(int travelId) throws SQLException;
	public abstract String getCategoryById(int budgetId) throws SQLException;
	public abstract int getMoneyAllotedById(int budgetId) throws SQLException;
	public abstract void updateBudgetExpense(int spent,int budgetId) throws SQLException;
}
