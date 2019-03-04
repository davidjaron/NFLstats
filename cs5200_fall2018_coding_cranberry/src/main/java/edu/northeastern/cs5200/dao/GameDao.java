package edu.northeastern.cs5200.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.northeastern.cs5200.models.Game;
import edu.northeastern.cs5200.repositories.GameRepository;


@Repository
public class GameDao {
  @Autowired
  private GameRepository gameRepository;

  public void createGame(Game game){
    gameRepository.save(game);
  }

  public void truncate(){
    gameRepository.deleteAll();
  }

  public Game findGame(Game game){
    return gameRepository.findGame(game.getLocation(), game.getDate());
  }
}
