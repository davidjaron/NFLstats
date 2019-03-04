package edu.northeastern.cs5200.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class TeamManagerUser extends User{
	
	
	private String teamName;

	/*
	@JsonIgnore
	@OneToMany(mappedBy = "manager")
	private List<PlayerUser> teamMember = new ArrayList<>();

	*/
	@Override
	@Transient
	public String getUserType(){
		return "Team Manager";
	}

	public TeamManagerUser() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TeamManagerUser(String username, String password, String firstName, String lastName, String city,
			String state) {
		super(username, password, firstName, lastName, city, state);

		// TODO Auto-generated constructor stub
	}

	
	
	public String getTeam() {
		return teamName;
	}

	public void setTeam(String team) {
		this.teamName = team;
	}

	/*
	public List<PlayerUser> getTeamMember() {
		return teamMember;
	}

	public void setTeamMember(List<PlayerUser> teamMember) {
		this.teamMember = teamMember;
	}
	*/

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}
}
