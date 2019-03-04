package edu.northeastern.cs5200.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

import edu.northeastern.cs5200.models.Game;
import edu.northeastern.cs5200.models.GameLog;
import edu.northeastern.cs5200.models.Player;


public interface GameLogRepository extends CrudRepository<GameLog, Integer> {

    @Query("SELECT l FROM GameLog l WHERE l.player=:player")
    public List<GameLog> findLogsForPlayer(@Param("player") Player player);

    @Query("SELECT l.game FROM GameLog l, Game g WHERE l.player=:player")
    public List<Game> findGameForLog(@Param("player") Player player);

}
