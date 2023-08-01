package travel;

import java.sql.SQLException;
import java.util.Scanner;

public class TravelMain {
	public static void main(String[] args) throws SQLException {
		Scanner a=new Scanner(System.in);
		System.out.println("--------------WELCOME TO TRAVEL EXPENSE TRACKER-----------------");
		int exit=1;
		while(exit!=0) {
		System.out.println("=======================================================================");
		System.out.println("1.Start Tracking");
		System.out.println("2.Exit Tracking");
		System.out.println("=======================================================================");
		System.out.println("Enter your option:");
		int exitChoice=a.nextInt();
		if(exitChoice==1) {
		System.out.println("=======================================================================");
		System.out.println("Choose to track existing one or new one");
		System.out.println("=======================================================================");
		System.out.println("1 Existing");
		System.out.println("2 New");
		System.out.println("=======================================================================");
		System.out.print("Type 1 or 2 :");
		int travelId;
		int choice=a.nextInt();
		a.nextLine();
		TravelDao travel=new TravelInfoQuery();
		if(choice==1) {
			System.out.println("=============================");
			System.out.println("Choose your user name id:");
			System.out.println("=============================");
			travel.getAllTravelInfo();
			System.out.println("=================");
			System.out.println("Type your id:");
			System.out.println("=================");
			travelId=a.nextInt();
			a.nextLine();
			System.out.println("=======================================================================");
			System.out.println("Add your expense list on the specific category you have created:");
			System.out.println("=======================================================================");
			BudgetDao budget=new BudgetQuery();
			budget.getAllBudget(travelId);
			ExpenseQuery expense=new ExpenseQuery();
			int addExpense=1;
			while(addExpense!=0) {
				System.out.println("1.Add expenses to track");
				System.out.println("2.Generate report");
				System.out.println("choose your option:");
				System.out.println("=======================================================================");
				int option=a.nextInt();
				a.nextLine();
				if(option==1) {
					System.out.println("Enter valid category name from above list:");
					String catname=a.nextLine();
					if(budget.checkCategory(catname, travelId)){
						System.out.println("Enter money spent on this category:");
						int spent=a.nextInt();
						int budgetId=budget.getBudgetId(catname,travelId);
						if(expense.insertValues(catname, spent, budgetId, travelId)) {
							budget.updateBudgetExpense(spent,budgetId);
							travel.updateRemainingAmount(spent,travelId);
							System.out.println("=======================================================================");
							System.out.println("Expense added if want to add more click again 1");
							System.out.println("=======================================================================");
						}
					}
				}
				else if(option==2) {
					System.out.println("=======================================================================");
					System.out.println("Your travel expense report:");
					System.out.println("=======================================================================");
					System.out.print("Your total expense: ");
					int totalExpense=budget.getTotalExpense(travelId);
					System.out.print(totalExpense+"\n");
					System.out.println("=======================================================================");
					System.out.print("Amount you have spent: ");
					int spentAmount=expense.getAmountSpent(travelId);
					System.out.print(spentAmount+"\n");
					System.out.println("=======================================================================");
					System.out.print("Available balance: ");
					System.out.print(totalExpense-spentAmount+"\n");
					System.out.println("=======================================================================");
					double remainingPercent=((totalExpense-spentAmount)*100)/totalExpense;
					System.out.printf("You have remaining %.2f percent of total amount\n",remainingPercent);
					System.out.println("=======================================================================");
					System.out.println("More specific information for more analysis: ");
					System.out.println("=======================================================================");
					travel.deepAnalysis(travelId);
					addExpense=0;
				}
			}
		}
		else if(choice==2) {
			System.out.println("Fill out the following fields: ");
			System.out.print("Enter your user name :");
			String userName=a.nextLine();
			System.out.print("Enter your travel place:");
			String travelPlace=a.nextLine();
			System.out.print("Enter your total budget:");
			int totalBudget=a.nextInt();
			a.nextLine();
			    travelId=travel.insertTravelValues(userName, travelPlace,totalBudget);
				System.out.println("you have created a travel journey start your tracking by defining your fields");
				System.out.println("Define your budget list for your total budget:");
				int addMoney=0;
				while(addMoney!=totalBudget) {
						BudgetDao budget=new BudgetQuery();
						System.out.println("Category name: ");
						String category=a.nextLine();
						System.out.println("Expense alloted: ");
						int expense=a.nextInt();
						a.nextLine();
						addMoney+=expense;
						if(!(addMoney>totalBudget))
						budget.insertValues(category, expense, travelId);
						else if(addMoney==totalBudget) {
							break;
						}
						else {
						System.out.println("Your expense run more than you calculated you have only "+(totalBudget-addMoney+expense)+" left");
						addMoney-=expense;
						}
			}

				System.out.println("Successfully created your fields");
		}
		}
		else if(exitChoice==2) {
			System.out.println("===============Thank you!!!================");
			exit=0;
		}
		}
	}
}
