package travel;

import java.sql.SQLException;

public interface TravelDao {
	public void getAllTravelInfo()throws SQLException;
	public int insertTravelValues(String userName,String travelPlace,int totalBudget)throws SQLException;
	public int getTravelId(String userName)throws SQLException;
	public void deepAnalysis(int travelId)throws SQLException ;
	public abstract void updateRemainingAmount(int spent,int travelId) throws SQLException;
}
