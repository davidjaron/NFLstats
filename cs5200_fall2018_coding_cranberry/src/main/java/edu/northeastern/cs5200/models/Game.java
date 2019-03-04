package edu.northeastern.cs5200.models;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Game {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String date;
  private String time;
  private String location;
  @OneToMany (mappedBy = "game", cascade = CascadeType.REMOVE)
  private List<GameLog> gameLogs;

  public Game(String date, String time, String location) {
    this.date = date;
    this.time = time;
    this.location = location;
    this.gameLogs = new ArrayList<>();
  }

  public Game(){
    this.gameLogs = new ArrayList<>();
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getDate() {
    return date;
  }

  public void setDate(String date) {
    this.date = date;
  }

  public String getTime() {
    return time;
  }

  public void setTime(String time) {
    this.time = time;
  }

  public String getLocation() {
    return location;
  }

  public void setLocation(String location) {
    this.location = location;
  }

  public List<GameLog> getgameLogs() {
    return gameLogs;
  }

  public void setgameLogs(List<GameLog> gameLogs) {
    this.gameLogs = gameLogs;
  }

  public void addGameLog(GameLog log){
    this.gameLogs.add(log);
    if (log.getGame() != this){
      log.setGame(this);
    }
  }
}
