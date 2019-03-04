package edu.northeastern.cs5200.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.HashMap;

import javax.persistence.*;

@Entity
public class GameLog {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @JsonIgnore
  @ManyToOne()
  private Player player;

  @JsonIgnore
  @ManyToOne()
  private Game game;

  @Transient
  public String getGameDate(){
    return game.getDate();
  }


  private int passAttempts;
  private int passCompletions;
  private float passPct;
  private float passYards;
  private float passYardsPerAttempt;
  private int passTD;
  private float passLng;
  private int passInt;
  private int pass20Plus;
  private int pass40Plus;
  private int passSacks;
  private float qbRating;
  private float rushAttempts;
  private float rushYards;
  private float rushAvg;
  private int rushTD;
  private float rushLong;
  private int rush20Plus;
  private int rush40Plus;
  private int rushFumbles;
  private int targets;
  private int receptions;
  private float recYards;
  private float recAverage;
  private int recTD;
  private float recLng;
  private int recFirstDowns;
  private int rec20Plus;
  private int rec40Plus;
  private int recFumbles;



  public Player getPlayer() {
    return player;
  }

  public void setPlayer(Player player) {
    this.player = player;
  }

  public Game getGame() {
    return game;
  }

  public void setGame(Game game) {
    this.game = game;
  }

  public int getPassAttempts() {
    return passAttempts;
  }

  public void setPassAttempts(int passAttempts) {
    this.passAttempts = passAttempts;
  }

  public int getPassCompletions() {
    return passCompletions;
  }

  public void setPassCompletions(int passCompletions) {
    this.passCompletions = passCompletions;
  }

  public float getPassPct() {
    return passPct;
  }

  public void setPassPct(float passPct) {
    this.passPct = passPct;
  }

  public float getPassYards() {
    return passYards;
  }

  public void setPassYards(float passYards) {
    this.passYards = passYards;
  }

  public float getPassYardsPerAttempt() {
    return passYardsPerAttempt;
  }

  public void setPassYardsPerAttempt(float passYardsPerAttempt) {
    this.passYardsPerAttempt = passYardsPerAttempt;
  }

  public int getPassTD() {
    return passTD;
  }

  public void setPassTD(int passTD) {
    this.passTD = passTD;
  }

  public float getPassLng() {
    return passLng;
  }

  public void setPassLng(float passLng) {
    this.passLng = passLng;
  }

  public int getPass20Plus() {
    return pass20Plus;
  }

  public void setPass20Plus(int pass20Plus) {
    this.pass20Plus = pass20Plus;
  }

  public int getPass40Plus() {
    return pass40Plus;
  }

  public void setPass40Plus(int pass40Plus) {
    this.pass40Plus = pass40Plus;
  }

  public int getPassSacks() {
    return passSacks;
  }

  public void setPassSacks(int passSacks) {
    this.passSacks = passSacks;
  }

  public float getQbRating() {
    return qbRating;
  }

  public void setQbRating(float qbRating) {
    this.qbRating = qbRating;
  }

  public float getRushAttempts() {
    return rushAttempts;
  }

  public void setRushAttempts(float rushAttempts) {
    this.rushAttempts = rushAttempts;
  }

  public float getRushYards() {
    return rushYards;
  }

  public void setRushYards(float rushYards) {
    this.rushYards = rushYards;
  }

  public float getRushAvg() {
    return rushAvg;
  }

  public void setRushAvg(float rushAvg) {
    this.rushAvg = rushAvg;
  }

  public int getRushTD() {
    return rushTD;
  }

  public void setRushTD(int rushTD) {
    this.rushTD = rushTD;
  }

  public float getRushLong() {
    return rushLong;
  }

  public void setRushLong(float rushLong) {
    this.rushLong = rushLong;
  }

  public int getRush20Plus() {
    return rush20Plus;
  }

  public void setRush20Plus(int rush20Plus) {
    this.rush20Plus = rush20Plus;
  }

  public int getRush40Plus() {
    return rush40Plus;
  }

  public void setRush40Plus(int rush40Plus) {
    this.rush40Plus = rush40Plus;
  }

  public int getRushFumbles() {
    return rushFumbles;
  }

  public void setRushFumbles(int rushFumbles) {
    this.rushFumbles = rushFumbles;
  }

  public void setQuartback(String whaaaa, HashMap<String, String> map){
    if (whaaaa.equals("PassAttempts")){
      this.setPassAttempts(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("PassCompletions")){
      this.setPassCompletions(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("PassPct")){
      this.setPassPct(Float.parseFloat(map.get(whaaaa)));
    } else if (whaaaa.equals("PassYards")) {
      this.setPassYards(Float.parseFloat(map.get(whaaaa)));
    } else if (whaaaa.equals("PassYardsPerAttempt")){
      this.setPassYardsPerAttempt(Float.parseFloat(map.get(whaaaa)));
    } else if (whaaaa.equals("PassTD")){
      this.setPassTD(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("PassInt")){
      this.setPassInt(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("PassLng")){
      this.setPassLng(Float.parseFloat(map.get(whaaaa)));
    } else if (whaaaa.equals("Pass20Plus")){
      this.setPass20Plus(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("Pass40Plus")){
      this.setPass40Plus(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("PassSacks")){
      this.setPassSacks(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("QbRating")){
      this.setQbRating(Float.parseFloat(map.get(whaaaa)));
    } else if (whaaaa.equals("RushAttempts")){
      this.setRushAttempts(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("RushYards")){
      this.setRushYards(Float.parseFloat(map.get(whaaaa)));
    } else if (whaaaa.equals("RushAverage")){
      this.setRushAvg(Float.parseFloat(map.get(whaaaa)));
    } else if (whaaaa.equals("RushTD")){
      this.setRushTD(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("RushLng")){
      this.setRushLong(Float.parseFloat(map.get(whaaaa)));
    } else if (whaaaa.equals("Rush20Plus")){
      this.setRush20Plus(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("Rush40Plus")){
      this.setRush40Plus(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("RushFumbles")){
      this.setRushFumbles(Integer.parseInt(map.get(whaaaa)));
    }
  }

  public int getPassInt() {
    return passInt;
  }

  public void setPassInt(int passInt) {
    this.passInt = passInt;
  }

  public int getTargets() {
    return targets;
  }

  public void setTargets(int targets) {
    this.targets = targets;
  }

  public int getReceptions() {
    return receptions;
  }

  public void setReceptions(int receptions) {
    this.receptions = receptions;
  }

  public float getRecYards() {
    return recYards;
  }

  public void setRecYards(float recYards) {
    this.recYards = recYards;
  }

  public float getRecAverage() {
    return recAverage;
  }

  public void setRecAverage(float recAverage) {
    this.recAverage = recAverage;
  }

  public int getRecTD() {
    return recTD;
  }

  public void setRecTD(int recTD) {
    this.recTD = recTD;
  }

  public float getRecLng() {
    return recLng;
  }

  public void setRecLng(float recLng) {
    this.recLng = recLng;
  }

  public int getRecFirstDowns() {
    return recFirstDowns;
  }

  public void setRecFirstDowns(int recFirstDowns) {
    this.recFirstDowns = recFirstDowns;
  }

  public int getRec20Plus() {
    return rec20Plus;
  }

  public void setRec20Plus(int rec20Plus) {
    this.rec20Plus = rec20Plus;
  }

  public int getRec40Plus() {
    return rec40Plus;
  }

  public void setRec40Plus(int rec40Plus) {
    this.rec40Plus = rec40Plus;
  }

  public int getRecFumbles() {
    return recFumbles;
  }

  public void setRecFumbles(int recFumbles) {
    this.recFumbles = recFumbles;
  }

  public void setWidout(String whaaaa, HashMap<String, String> map){
    if (whaaaa.equals("Targets")){
      this.setTargets(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("Receptions")){
      this.setReceptions(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("RecYards")){
      this.setRecYards(Float.parseFloat(map.get(whaaaa)));
    } else if (whaaaa.equals("RecAvg")){
      this.setRecAverage(Float.parseFloat(map.get(whaaaa)));
    } else if (whaaaa.equals("RecTD")){
      this.setRecTD(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("RecLng")){
      this.setRecLng(Float.parseFloat(map.get(whaaaa)));
    } else if (whaaaa.equals("Rec1stDowns")){
      this.setRecFirstDowns(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("Rec20Plus")){
      this.setRec20Plus(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("Rec40Plus")){
      this.setRec40Plus(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("RecFumbles")){
      this.setRecFumbles(Integer.parseInt(map.get(whaaaa)));
    }
  }

  public void setRunningBack(String whaaaa, HashMap<String, String> map){
    if (whaaaa.equals("RushAttempts")){
      this.setRushAttempts(Float.parseFloat(map.get(whaaaa)));
    } else if (whaaaa.equals("RushYards")){
      this.setRushYards(Float.parseFloat(map.get(whaaaa)));
    } else if (whaaaa.equals("RushAverage")){
      this.setRushAvg(Float.parseFloat(map.get(whaaaa)));
    } else if (whaaaa.equals("RushTD")){
      this.setRushTD(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("RushLng")){
      this.setRushLong(Float.parseFloat(map.get(whaaaa)));
    } else if (whaaaa.equals("Rush20Plus")){
      this.setRush20Plus(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("Rush40Plus")){
      this.setRush40Plus(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("RushFumbles")){
      this.setRushFumbles(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("Targets")){
      this.setTargets(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("Receptions")){
      this.setReceptions(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("RecYards")){
      this.setRecYards(Float.parseFloat(map.get(whaaaa)));
    } else if (whaaaa.equals("RecAvg")){
      this.setRecAverage(Float.parseFloat(map.get(whaaaa)));
    } else if (whaaaa.equals("RecTD")){
      this.setRecTD(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("RecLng")){
      this.setRecLng(Float.parseFloat(map.get(whaaaa)));
    } else if (whaaaa.equals("Rec1stDowns")){
      this.setRecFirstDowns(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("Rec20Plus")){
      this.setRec20Plus(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("Rec40Plus")){
      this.setRec40Plus(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("RecFumbles")){
      this.setRecFumbles(Integer.parseInt(map.get(whaaaa)));
    }
  }

  public void setTightEnd(String whaaaa, HashMap<String, String> map){
    if (whaaaa.equals("Targets")){
      this.setTargets(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("Receptions")){
      this.setReceptions(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("RecYards")){
      this.setRecYards(Float.parseFloat(map.get(whaaaa)));
    } else if (whaaaa.equals("RecAvg")){
      this.setRecAverage(Float.parseFloat(map.get(whaaaa)));
    } else if (whaaaa.equals("RecTD")){
      this.setRecTD(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("RecLng")){
      this.setRecLng(Float.parseFloat(map.get(whaaaa)));
    } else if (whaaaa.equals("Rec1stDowns")){
      this.setRecFirstDowns(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("Rec20Plus")){
      this.setRec20Plus(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("Rec40Plus")){
      this.setRec40Plus(Integer.parseInt(map.get(whaaaa)));
    } else if (whaaaa.equals("RecFumbles")){
      this.setRecFumbles(Integer.parseInt(map.get(whaaaa)));
    }
  }



}
