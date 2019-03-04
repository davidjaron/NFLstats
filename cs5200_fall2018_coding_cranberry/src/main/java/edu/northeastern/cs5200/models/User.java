package edu.northeastern.cs5200.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String username;
	private String password;
	private String firstName;
	private String lastName;
	//private Date dob;
	private String city;
	private String state;
	//private String country;
	//private Membership membership;
	//private boolean userAgreement = false;


	@JsonIgnore
	@OneToOne (mappedBy = "manager", cascade=CascadeType.REMOVE)
	private WatchList watchList;



//	@JsonIgnore
//	@ManyToMany
//	@JoinTable(name="FOLLOWTABLE",
//	     joinColumns=@JoinColumn (name="USER_ID",
//	     referencedColumnName="ID"),
//	     inverseJoinColumns=@JoinColumn(name=
//	        "PLAYER_ID", referencedColumnName="ID"))
//	private List<Player> players = new ArrayList<>();

	
	/*
	@ManyToMany
	@JoinTable(name="FOLLOWTABLE",
	     joinColumns=@JoinColumn(name="USER_ID",
	     referencedColumnName="ID"),
	     inverseJoinColumns=@JoinColumn(name=
	        "TEAM_ID", referencedColumnName="ID"))
	private List<Team> favoriteTeams = new ArrayList<>();
	*/
	
	@JsonIgnore
	@OneToMany(mappedBy = "user", cascade=CascadeType.REMOVE)
	private List<Comment> comments = new ArrayList<>();

	/*
	@JsonIgnore
	@OneToMany(mappedBy = "user")
	private List<UserWatchLog> userWatchLogs = new ArrayList<>();
*/


	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	//public List<Player> getPlayers() {
	//	return players;
	//}

	@JsonIgnore
	@OneToMany(mappedBy = "user")
	private List<Topic> topics = new ArrayList<>();

	@Transient
	public String getUserType(){
		return "Basic User";
	}
	
	
	public User(String username, String password, String firstName, String lastName, 
			String city, String state) {
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		//this.dob = dob;
		this.city = city;
		this.state = state;
		//this.country = country;
		
	}
	
	public User() {}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	/*
	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}
	*/

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	/*
	public String getCountry() {
		return country;
	}

	
	public void setCountry(String country) {
		this.country = country;
	}
	

	public boolean isUserAgreement() {
		return userAgreement;
	}

	public void setUserAgreement(boolean userAgreement) {
		this.userAgreement = userAgreement;
	}
*/
	


//	public List<Player> getFavoritePlayers() {
//		return players;
//	}

//	public void setPlayers(List<Player> players) {
//		this.players = players;
//	}
	

	/*
	public List<Team> getFavoriteTeams() {
		return favoriteTeams;
	}

	public void setFavoriteTeams(List<Team> favoriteTeams) {
		this.favoriteTeams = favoriteTeams;
	}
	*/

	public List<Topic> getTopics() {
		return topics;
	}

	public void setTopics(List<Topic> topics) {
		this.topics = topics;
	}

//
//	public List<UserWatchLog> getWatchLists() {
//		return watchLists;
//	}
//
//	public void setWatchLists(List<UserWatchLog> userWatchLogs) {
//		this.watchLists = userWatchLogs;
//	}

	public WatchList getWatchList() {
		return watchList;
	}

	public void setWatchList(WatchList watchList) {
		this.watchList = watchList;
	}
}
