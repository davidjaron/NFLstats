package edu.northeastern.cs5200.models;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Transient;

@Entity
public class PlayerUser extends User {
	//private int number;
	//private String team;
	private boolean isRetired = false;
	
	/*
	
	@ManyToOne
	private TeamManagerUser manager;
	*/

	@Override
	@Transient
	public String getUserType(){
		return "Athlete";
	}
	
	public PlayerUser() {
		super();
		// TODO Auto-generated constructor stub
	}
	public PlayerUser(String username, String password, String firstName, String lastName, String city, String state) {
		super(username, password, firstName, lastName, city, state);
		// TODO Auto-generated constructor stub
	}
	
	/*
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	public String getTeam() {
		return team;
	}
	public void setTeam(String team) {
		this.team = team;
	}
	*/
	public boolean isRetired() {
		return isRetired;
	}
	public void setRetired(boolean isRetired) {
		this.isRetired = isRetired;
	}

}
