package edu.northeastern.cs5200.dao;

import edu.northeastern.cs5200.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

import edu.northeastern.cs5200.models.Game;
import edu.northeastern.cs5200.models.GameLog;
import edu.northeastern.cs5200.models.Player;
import edu.northeastern.cs5200.repositories.GameLogRepository;


@Repository
public class LogDao {
  @Autowired
  private GameLogRepository gameLogRepository;
  @Autowired
  private PlayerRepository playerRepository;

  public void createGameLog(GameLog log) {
    gameLogRepository.save(log);
  }

  public void truncate(){
    gameLogRepository.deleteAll();
  }

  public List<GameLog> getLogsForPlayer(String first, String last){
    Player player = playerRepository.findPlayerByName(first, last);
    return gameLogRepository.findLogsForPlayer(player);
  }

}
