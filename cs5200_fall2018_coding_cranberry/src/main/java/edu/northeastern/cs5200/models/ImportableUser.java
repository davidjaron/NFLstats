package edu.northeastern.cs5200.models;

public class ImportableUser extends User {
	private String userType;
	
	
	public ImportableUser() {
		super();
		// TODO Auto-generated constructor stub
	}


	public ImportableUser(String username, String password, String firstName, String lastName, String city,
			String state) {
		super(username, password, firstName, lastName, city, state);
		// TODO Auto-generated constructor stub
	}



	public String getUserType() {
		return userType;
	}
	
	
}
