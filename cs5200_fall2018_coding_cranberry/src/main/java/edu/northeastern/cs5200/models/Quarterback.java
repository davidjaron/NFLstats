package edu.northeastern.cs5200.models;

import javax.persistence.Entity;
import javax.persistence.Transient;

@Entity
public class Quarterback extends Player {


  public Quarterback(String firstName, String lastName, String jerseyNum) {
    super(firstName, lastName, jerseyNum);
  }


  public Quarterback() {
  }

  @Override
  @Transient
  public String getType(){
    return "QB";
  }


}
