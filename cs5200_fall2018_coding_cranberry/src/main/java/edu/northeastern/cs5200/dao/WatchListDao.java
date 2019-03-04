package edu.northeastern.cs5200.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.northeastern.cs5200.models.ImportablePlayer;
import edu.northeastern.cs5200.models.Player;
import edu.northeastern.cs5200.models.TeamManagerUser;
import edu.northeastern.cs5200.models.User;
import edu.northeastern.cs5200.models.WatchList;
import edu.northeastern.cs5200.repositories.PlayerRepository;
import edu.northeastern.cs5200.repositories.TeamManagerUserRepository;
import edu.northeastern.cs5200.repositories.UserRepository;
import edu.northeastern.cs5200.repositories.WatchListRepository;

@Service
public class WatchListDao {
	
	
	@Autowired
	WatchListRepository wlRepo;
	
	@Autowired
	PlayerRepository playerRepo;
	
	@Autowired
	TeamManagerUserRepository mRepo;

	@Autowired
	private UserRepository userRepository;
	
	/*
	public List<Player> findAllPlayersForWatchList(WatchList aWatchlist) {	
		WatchList watchlist = wlRepo.findWatchListByName(aWatchlist.getName());
		return wlRepo.findAllPlayersOfWatchList(watchlist);
	}
	*/
	
	
	public List<WatchList> findAllWatchLists(){
		return (List<WatchList>) wlRepo.findAll();
		
		
	}
	
	
	
	public List<Player> findAllPlayersForManager(TeamManagerUser manager){
		TeamManagerUser aManager = mRepo.findManagerByUsername(manager.getUsername());
		WatchList watchlist = wlRepo.findWatchListOfManager(aManager);
		return wlRepo.findAllPlayersOfWatchList(watchlist);
		
		
	}
	
	
	public WatchList addToWatchList(Player player, User aManager){
		WatchList watchList = wlRepo.findWatchListOfManager(aManager);
		
		if(watchList == null) {
			watchList = this.createWatchList(aManager);
		}
		watchList.addPlayer(player);
		player.setWatchList(watchList);
		return wlRepo.save(watchList);

//		Player aPlayer = playerRepo.findPlayerByName(player.getFirstName(), player.getLastName());
//		User manager = mRepo.findManagerByUsername(aManager.getUsername());
//
//		WatchList watchlist = wlRepo.findWatchListOfManager(manager);
//
//		if(watchlist == null) {
//			watchlist = new WatchList();
//			aManager.setWatchList(watchlist);
//			watchlist.setManager(aManager);
//			//wlRepo.save(newWatch);
//		}
//
//		player.setWatchList(watchlist);
//
//		wlRepo.save(watchlist);
//		mRepo.save(aManager);
//
//		return playerRepo.save(player);
		
	}
	
	
	
	public WatchList createWatchList(User manager) {
		//TeamManagerUser manager = mRepo.findManagerByUsername(aManager.getUsername());
		WatchList newWatch = new WatchList();
		newWatch.setManager(manager);
		wlRepo.save(newWatch);
		return newWatch;
	}
	
	
	public WatchList deleteFromWatchList(ImportablePlayer player){	
		TeamManagerUser aManager = mRepo.findManagerByUsername(player.getManagerName());
		WatchList watchlist = wlRepo.findWatchListOfManager(aManager);	
		List<Player> players = wlRepo.findAllPlayersOfWatchList(watchlist);
		players.remove(player);
		watchlist.setPlayers(players);
		return wlRepo.save(watchlist);	
	}
	
	
	/*
	
	public void deletTeamManager(List<Player> players) {
		
		
	}
	*/
	
	
	
	
	
	
	
	
	
	
	
	

}
