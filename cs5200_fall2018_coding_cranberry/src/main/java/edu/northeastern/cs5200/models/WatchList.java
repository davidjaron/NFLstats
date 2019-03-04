package edu.northeastern.cs5200.models;

import java.beans.Transient;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class WatchList {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	
	
	//private String name;
	
	@JsonIgnore
	@OneToOne
	private User manager;
	
	@JsonIgnore
	@OneToMany(mappedBy="watchList")
	private List<Player> players = new ArrayList<>();
	
//	@Transient
//	public String getManageName() {
//		return this.manager.getFirstName()+ " " +this.manager.getLastName();
//		
//	}
	
	
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	/*
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	*/
	
	public User getManager() {
		return manager;
	}
	public void setManager(User manager) {
		this.manager = manager;
	}
	public List<Player> getPlayers() {
		return players;
	}
	public void setPlayers(List<Player> players) {
		this.players = players;
	}

	public void addPlayer(Player player){
		this.getPlayers().add(player);
	}

}
