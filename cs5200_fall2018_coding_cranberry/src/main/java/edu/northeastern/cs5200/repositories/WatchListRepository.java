
package edu.northeastern.cs5200.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import edu.northeastern.cs5200.models.Player;
import edu.northeastern.cs5200.models.TeamManagerUser;
import edu.northeastern.cs5200.models.User;
import edu.northeastern.cs5200.models.WatchList;


public interface WatchListRepository extends CrudRepository<WatchList, Integer> {

	
	
	@Query("SELECT wl FROM WatchList wl WHERE wl.manager=:manager")
	public WatchList findWatchListOfManager(@Param("manager") User manager);
	
	
	@Query("SELECT p from Player p WHERE p.watchList=:watchList")
	public List<Player> findAllPlayersOfWatchList(@Param("watchList") WatchList watchList);

	
	/*
	@Query("SELECT wl FROM WatchList wl WHERE wl.name=:name")
	public WatchList findWatchListByName(String name);
	*/
	/*
	@Query("DELETE wl FROM WatchList wl WHERE wl.player=:player")
	public v
	*/
}

