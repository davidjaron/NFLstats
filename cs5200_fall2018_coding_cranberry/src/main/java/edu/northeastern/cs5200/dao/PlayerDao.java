package edu.northeastern.cs5200.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

import edu.northeastern.cs5200.models.Comment;
import edu.northeastern.cs5200.models.Player;
import edu.northeastern.cs5200.models.Quarterback;
import edu.northeastern.cs5200.models.Runningback;
import edu.northeastern.cs5200.models.Tightend;
import edu.northeastern.cs5200.models.WideReceiver;
import edu.northeastern.cs5200.repositories.PlayerRepository;
import edu.northeastern.cs5200.repositories.QuarterbackRepository;
import edu.northeastern.cs5200.repositories.RunningbackRepository;
import edu.northeastern.cs5200.repositories.TightendRepository;
import edu.northeastern.cs5200.repositories.WideReceiverRepository;


@Repository
public class PlayerDao {
  @Autowired
  private QuarterbackRepository quarterbackRepository;
  @Autowired
  private RunningbackRepository runningbackRepository;
  @Autowired
  private TightendRepository tightendRepository;
  @Autowired
  private WideReceiverRepository wideReceiverRepository;
  @Autowired
  private PlayerRepository playerRepository; 

  public void createQuarterback(Quarterback player){
    quarterbackRepository.save(player);
  }

  public void createRunningBack(Runningback player){
    runningbackRepository.save(player);
  }

  public void createWideout(WideReceiver player){
    wideReceiverRepository.save(player);
  }

  public void createTightEnd(Tightend player){
    tightendRepository.save(player);
  }
  
  public List<Player> findPlayers(){
	  return (List<Player>) playerRepository.findAll(); 
  }

  public Player findPlayerByName(String first, String last){
    return playerRepository.findPlayerByName(first, last);
  }

  public List<Player> playerSearch(String name){
    return playerRepository.playerSearch(name);
  }
  
  public Player addLikeToPlayer(String first, String last) {
	  Player player = playerRepository.findPlayerByName(first, last);
	  player.setLikes(player.getLikes() + 1);
	  return playerRepository.save(player);
  }

  public void truncate(){
    quarterbackRepository.deleteAll();
    runningbackRepository.deleteAll();
    tightendRepository.deleteAll();
    wideReceiverRepository.deleteAll();
  }
}
