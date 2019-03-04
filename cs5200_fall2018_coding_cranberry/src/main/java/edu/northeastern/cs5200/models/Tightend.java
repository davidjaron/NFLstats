package edu.northeastern.cs5200.models;

import javax.persistence.Entity;
import javax.persistence.Transient;

@Entity
public class Tightend extends Player{
  public Tightend(String firstName, String lastName, String jerseyNum) {
    super(firstName, lastName, jerseyNum);
  }

  public Tightend() {
  }

  @Override
  @Transient
  public String getType(){
    return "TE";
  }
}
