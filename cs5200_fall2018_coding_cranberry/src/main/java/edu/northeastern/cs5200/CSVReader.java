package edu.northeastern.cs5200;


import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import edu.northeastern.cs5200.dao.GameDao;
import edu.northeastern.cs5200.dao.LogDao;
import edu.northeastern.cs5200.dao.PlayerDao;
import edu.northeastern.cs5200.dao.TeamDao;
import edu.northeastern.cs5200.models.Game;
import edu.northeastern.cs5200.models.GameLog;
import edu.northeastern.cs5200.models.Player;
import edu.northeastern.cs5200.models.Quarterback;
import edu.northeastern.cs5200.models.Runningback;
import edu.northeastern.cs5200.models.Team;
import edu.northeastern.cs5200.models.Tightend;
import edu.northeastern.cs5200.models.WideReceiver;

public class CSVReader {

  public void populate(GameDao gameDao, LogDao logDao, PlayerDao playerDao, TeamDao teamDao) {

    String csvFile = "src/main/player_gamelogs-nfl-2017-regular.csv";
    BufferedReader br = null;
    String line = "";
    String cvsSplitBy = ",";

    try {

      List<GameLog> logs = new ArrayList<>();
      HashMap<String, String> map = new HashMap<>();
      br = new BufferedReader(new FileReader(csvFile));
      line = br.readLine();
      String[] headers = line.split(cvsSplitBy);
      Player player = null;
      while ((line = br.readLine()) != null){
        int j = 0;
        String[] data = line.split(cvsSplitBy);
        for (int i = 0; i < data.length -1; i++){
          if (i == 23 && data.length == 175){
            continue;
          }
          map.put(headers[j].replace("'", "").replace(" ", "").replace("#", ""), data[i].replace
                  ("'", " ").replace(" ", ""));
          j++;
      }
      /*  if (team == null){
          team = new Team();
          team.setName(map.get("TeamName"));
          team.setLocation(map.get("TeamCity"));
          teamDao.createTeam(team);

        } else if (!team.getName().equals(map.get("TeamName"))){
          team = new Team();
          team.setName(map.get("TeamName"));
          team.setLocation(map.get("TeamCity"));
          if (teamDao.findTeam(team.getName()) == null){
            teamDao.createTeam(team);
          } else {
            team = teamDao.findTeam(team.getName());
          }
        } else {
          team = teamDao.findTeam(team.getName());
        }*/
        Team team = teamDao.findTeam(map.get("TeamName"));
        if (team == null){
          team = new Team();
          team.setName(map.get("TeamName"));
          team.setLocation(map.get("TeamCity"));
          teamDao.createTeam(team);
        }

        if (player == null){
          player = playerMaker(map, team, playerDao);
        }  else if  (!player.getFirstName().equals(map.get("FirstName")) && !map.get("LastName").equals(player.getLastName())){
          player = playerMaker(map, team, playerDao);
        }
        Game game = gameMaker(map);
        if (gameDao.findGame(game) != null){
          game = gameDao.findGame(game);
        } else {
          gameDao.createGame(game);
        }
        GameLog log = logDecider(map, player, game, logDao);
        logs.add(log);
        System.out.println(log);

      }

      String fumbles = map.get("QbRating");
      System.out.println(fumbles);


    } catch (FileNotFoundException e) {
      e.printStackTrace();
    } catch (IOException e) {
      e.printStackTrace();
    } finally {
      if (br != null) {
        try {
          br.close();
        } catch (IOException e) {
          e.printStackTrace();
        }
      }
    }
  }

  public static Game gameMaker(HashMap<String, String> map){
    String[] arr = {"GameDate", "GameTime", "AwayTeamName", "HomeTeamName", "Location"};
    Game game = new Game(map.get(arr[0]), map.get(arr[1]), map.get(arr[4]));
    for (int i = 0; i < arr.length; i++){
      System.out.println(map.get(arr[i]));
    }
    System.out.println();
    return game;
  }

  public static Player playerMaker(HashMap<String, String> map, Team team, PlayerDao dao){
    String[] arr = {"FirstName", "LastName", "JerseyNum", "Position", "TeamName"};
    if (map.get("Position").equals("QB")){
      Quarterback player = new Quarterback(map.get("FirstName"), map.get("LastName"), map.get("JerseyNum"));
      player.setTeam(team);
      dao.createQuarterback(player);
      return player;
    } else if (map.get("Position").equals("RB")){
      Runningback player = new Runningback(map.get("FirstName"), map.get("LastName"), map.get("JerseyNum"));
      player.setTeam(team);
      dao.createRunningBack(player);
      return player;
    } else if (map.get("Position").equals("TE")){
      Tightend player = new Tightend(map.get("FirstName"), map.get("LastName"), map.get
              ("JerseyNum"));
      player.setTeam(team);
      dao.createTightEnd(player);
      return player;
    } else if (map.get("Position").equals("WR")){
      WideReceiver player = new WideReceiver(map.get("FirstName"), map.get("LastName"), map.get("JerseyNum"));
      player.setTeam(team);
      dao.createWideout(player);
      return player;
    } else {
      return null;
    }
  }

  public static GameLog qbGameLogMaker(HashMap<String, String> map, Player player, Game
          game){
    String[] arr = {"PassAttempts", "PassCompletions", "PassPct",
            "PassYards", "PassYardsPerAtt", "PassTD", "PassInt", "PassLng",
            "Pass20Plus", "Pass40Plus", "PassSacks", "QbRating", "RushAttempts", "RushYards",
            "RushAverage", "RushTD", "RushLng", "Rush20Plus", "Rush40Plus", "RushFumbles"};
    GameLog log = new GameLog();
    log.setPlayer(player);
    log.setGame(game);
    for (int i = 0; i < arr.length; i++){
      log.setQuartback(arr[i], map);
    }
    System.out.println();
    return log;
  }

  public static GameLog rbLogMaker(HashMap<String, String> map, Player player, Game game){
    String[] arr = {"RushAttempts", "RushYards",
            "RushAverage", "RushYardsPerGame", "RushTD", "RushLng", "Rush1stDownsPct",
            "Rush20Plus", "Rush40Plus", "RushFumbles", "Targets", "Receptions", "RecYards",
            "RecAverage", "RecTD", "RecLng", "Rec1stDowns", "Rec20Plus",
            "Rec40Plus", "RecFumbles"};
    GameLog log = new GameLog();
    log.setPlayer(player);
    log.setGame(game);
    for (int i = 0; i < arr.length; i++){
      log.setRunningBack(arr[i], map);
    }
    System.out.println();
    return log;
  }

  public static GameLog wrLogMaker(HashMap<String, String> map, Player player, Game game){
    String[] arr = {"Targets", "Receptions", "RecYards",
            "RecAverage", "RecYardsPerGame", "RecTD", "RecLng", "Rec1stDowns", "Rec20Plus",
            "Rec40Plus", "RecFumbles"};
    GameLog log = new GameLog();
    log.setPlayer(player);
    log.setGame(game);
    for (int i = 0; i < arr.length; i++){
      log.setWidout(arr[i], map);
    }
    System.out.println();
    return log;
  }

  public static GameLog teLogMaker(HashMap<String, String> map, Player player, Game game){
    String[] arr = {"Targets", "Receptions", "RecYards",
            "RecAverage", "RecYardsPerGame", "RecTD", "RecLng", "Rec1stDowns", "Rec20Plus",
            "Rec40Plus", "RecFumbles"};
    GameLog log = new GameLog();
    log.setPlayer(player);
    log.setGame(game);
    for (int i = 0; i < arr.length; i++){
      log.setTightEnd(arr[i], map);
    }
    return log;
  }

  public static GameLog logDecider(HashMap<String, String> map, Player player, Game game, LogDao
          dao){
    if (map.get("Position").equals("QB")){
      GameLog log = qbGameLogMaker(map, player, game);
      dao.createGameLog(log);
      return log;
    } else if (map.get("Position").equals("RB")){
      GameLog log = rbLogMaker(map, player, game);
      dao.createGameLog(log);
      return log;
    } else if (map.get("Position").equals("WR")){
      GameLog log = wrLogMaker(map, player, game);
      dao.createGameLog(log);
      return log;
    } else if (map.get("Position").equals("TE")){
      GameLog log = teLogMaker(map, player, game);
      dao.createGameLog(log);
      return log;
    }
    return null;
  }

}

