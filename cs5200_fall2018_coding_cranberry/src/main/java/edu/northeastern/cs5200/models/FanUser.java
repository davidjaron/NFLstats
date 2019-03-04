package edu.northeastern.cs5200.models;

import javax.persistence.Entity;
import javax.persistence.Transient;

@Entity
public class FanUser extends User{
	
	public FanUser(String username, String password, String firstName, String lastName, String city, String state) {
		super(username, password, firstName, lastName, city, state);
		// TODO Auto-generated constructor stub
	}

	public FanUser() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	@Transient
	public String getUserType(){
		return "Fan";
	}
	
	
	

}
