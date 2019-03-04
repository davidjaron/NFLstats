package edu.northeastern.cs5200.models;

import javax.persistence.Entity;
import javax.persistence.Transient;

@Entity
public class AdminUser extends User{
	private String adminKey;

	@Override
	@Transient
	public String getUserType(){
		return "Admin";
	}

	
	public AdminUser(String username, String password, String firstName, String lastName, String city, String state) {
		super(username, password, firstName, lastName, city, state);
		// TODO Auto-generated constructor stub
	}
	
	public AdminUser(String username, String password, String firstName, String lastName, String city, String state, String adminKey) {
		super(username, password, firstName, lastName, city, state);
		this.adminKey = adminKey;
		// TODO Auto-generated constructor stub
	}
	
	
	public AdminUser() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public String getAdminKey() {
		return adminKey;
	}

	public void setAdminKey(String adminKey) {
		this.adminKey = adminKey;
	}
	
	
	
	
	

}
