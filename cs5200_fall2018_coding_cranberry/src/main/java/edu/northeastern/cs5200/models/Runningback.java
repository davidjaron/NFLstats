package edu.northeastern.cs5200.models;

import javax.persistence.Entity;
import javax.persistence.Transient;

@Entity
public class Runningback extends Player {
  public Runningback(String firstName, String lastName, String jerseyNum) {
    super(firstName, lastName, jerseyNum);
  }

  public Runningback() {
  }

  @Override
  @Transient
  public String getType(){
    return "RB";
  }
}
