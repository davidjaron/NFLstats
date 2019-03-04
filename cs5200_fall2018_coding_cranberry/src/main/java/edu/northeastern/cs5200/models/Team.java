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
public class Team {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String name;
  private String location;
  @OneToMany (mappedBy = "team", cascade = CascadeType.REMOVE)
  private List<Player> players;

  public Team(String name, String location, List<Player> players) {
    this.name = name;
    this.location = location;
    this.players = players;
  }

  public Team(String name, String location) {
    this.name = name;
    this.location = location;
    this.players = new ArrayList<>();
  }

  public Team() {
    this.players = new ArrayList<>();
  }


  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getLocation() {
    return location;
  }

  public void setLocation(String location) {
    this.location = location;
  }

  public List<Player> getPlayers() {
    return players;
  }

  public void setPlayers(List<Player> players) {
    this.players = players;
  }

  public void addPlayer(Player player){
    this.players.add(player);
    if (player.getTeam() != this){
      player.setTeam(this);
    }
  }
}
