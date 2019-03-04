package edu.northeastern.cs5200.models;


import javax.persistence.Entity;
import javax.persistence.Transient;

@Entity
public class WideReceiver extends Player {
  public WideReceiver(String firstName, String lastName, String jerseyNum) {
    super(firstName, lastName, jerseyNum);
  }

  public WideReceiver() {
  }

  @Override
  @Transient
  public String getType(){
    return "WR";
  }
}
