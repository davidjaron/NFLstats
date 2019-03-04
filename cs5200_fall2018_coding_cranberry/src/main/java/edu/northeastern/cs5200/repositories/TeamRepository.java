package edu.northeastern.cs5200.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

import edu.northeastern.cs5200.models.Player;
import edu.northeastern.cs5200.models.Team;


public interface TeamRepository extends CrudRepository<Team, Integer> {
  @Query("SELECT s FROM Team s WHERE s.name=:name")
  public Team findTeam(@Param("name") String name);

}
