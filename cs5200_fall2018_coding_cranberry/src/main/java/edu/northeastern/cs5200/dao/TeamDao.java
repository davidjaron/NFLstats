package edu.northeastern.cs5200.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import edu.northeastern.cs5200.models.Player;
import edu.northeastern.cs5200.models.Team;
import edu.northeastern.cs5200.repositories.TeamRepository;

@Service
public class TeamDao {
  @Autowired
  private TeamRepository teamRepository;

  public Team createTeam(Team team){
    return teamRepository.save(team);
  }

  public void truncate(){
    teamRepository.deleteAll();
  }

  public Team findTeam(String name){
    return teamRepository.findTeam(name);
  }
  public List<Team> findTeams(){
	  return (List<Team>) teamRepository.findAll(); 
  }
  
  public void deleteTeam(Team team) {
	  teamRepository.delete(team);
  }
  
}
