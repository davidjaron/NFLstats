package edu.northeastern.cs5200.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
public class Player {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String firstName;
  private String lastName;
  private String jerseyNum;
  private int likes;

/*
  @JsonIgnore
  @ManyToOne
  private UserWatchLog userWatchLog;
*/
  @JsonIgnore
  @ManyToOne
  private Team team;

  @JsonIgnore
  @OneToMany (mappedBy = "player", cascade = CascadeType.REMOVE)
  private List<GameLog> stats;


//  @JsonIgnore
//  @ManyToMany(mappedBy="players")
//  private List<User> users = new ArrayList<>();
  
  @JsonIgnore
  @ManyToOne
  private WatchList watchList;

  

  @JsonIgnore
  @OneToMany (mappedBy = "player")
  private List<Comment> comments = new ArrayList<>();
 
  

  public Player(String firstName, String lastName, String jerseyNum, Team team) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.jerseyNum = jerseyNum;
    this.team = team;
    this.stats = new ArrayList<>();
  }

  public Player(){
    this.stats = new ArrayList<>();
  }

  public Player(String firstName, String lastName, String jerseyNum) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.jerseyNum = jerseyNum;
    this.stats = new ArrayList<>();
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

  public String getJerseyNum() {
    return jerseyNum;
  }

  public void setJerseyNum(String jerseyNum) {
    this.jerseyNum = jerseyNum;
  }

  public Team getTeam() {
    return team;
  }

  public void setTeam(Team team) {
    this.team = team;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public void addGameLog(GameLog log){
    this.stats.add(log);
    if (log.getPlayer() != this){
      log.setPlayer(this);
    }
  }

  public List<GameLog> getStats() {
    return stats;
  }

  public void setStats(List<GameLog> stats) {
    this.stats = stats;
  }

//  public List<User> getUsers() {
//	return users;
//}
//
//  public void setUsers(List<User> users) {
//	this.users = users;
//}


  public int getLikes() {
	return likes;
}

public void setLikes(int likes) {
	this.likes = likes;
}

public List<Comment> getComments() {
	return comments;
}

  public void setComments(List<Comment> comments) {
	this.comments = comments;
}

  @Transient
  public String getType(){
    return "Player";
  }

public WatchList getWatchList() {
	return watchList;
}

public void setWatchList(WatchList watchList) {
	this.watchList = watchList;
}

  /*
  public UserWatchLog getUserWatchLog() {
    return userWatchLog;
  }

  public void setUserWatchLog(UserWatchLog userWatchLog) {
    this.userWatchLog = userWatchLog;
  }
  */
}
