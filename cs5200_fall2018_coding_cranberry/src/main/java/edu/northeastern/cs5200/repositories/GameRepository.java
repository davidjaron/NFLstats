package edu.northeastern.cs5200.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import edu.northeastern.cs5200.models.Game;

public interface GameRepository extends CrudRepository<Game, Integer> {
  @Query("SELECT s FROM Game s WHERE s.location=:location AND s.date=:date")
  public Game findGame(@Param("location") String location, @Param("date") String date);
}
