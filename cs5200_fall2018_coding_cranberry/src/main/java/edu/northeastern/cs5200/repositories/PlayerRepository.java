package edu.northeastern.cs5200.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

import edu.northeastern.cs5200.models.Player;


public interface PlayerRepository extends CrudRepository<Player, Integer> {
  @Query("SELECT p FROM Player p WHERE p.firstName=:first AND p.lastName=:last")
  public Player findPlayerByName(@Param("first") String first, @Param("last") String last);

  @Query("SELECT p from Player p WHERE p.firstName=:name OR p.lastName=:name")
  public List<Player> playerSearch(@Param("name") String name);

}
