package edu.northeastern.cs5200.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5200.dao.PlayerDao;
import edu.northeastern.cs5200.dao.UserDao;
import edu.northeastern.cs5200.dao.WatchListDao;
import edu.northeastern.cs5200.models.Player;
import edu.northeastern.cs5200.models.TeamManagerUser;
import edu.northeastern.cs5200.models.User;
import edu.northeastern.cs5200.models.WatchList;
import edu.northeastern.cs5200.repositories.PlayerRepository;
import edu.northeastern.cs5200.repositories.TeamManagerUserRepository;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
public class WatchListController {
	@Autowired
	WatchListDao wDao;
	
	@Autowired
	UserDao uDao;
	
	@Autowired
	PlayerDao pDao;
	
	@Autowired
	PlayerRepository pRepo;
	
	
	@Autowired
	TeamManagerUserRepository mDao;
	
	
	@GetMapping(value = "/api/find/watchlist/{username}")
	public List<Player> findAllPlayersFroWatchList(@PathVariable("username") String username) {
		User manager = uDao.findUserByUsername(username);
		return wDao.findAllPlayersForManager((TeamManagerUser)manager);	
		
	}
	
	@GetMapping(value = "/api/{user}/watchlist/add/player/find/{firstName}/{lastName}")
	public WatchList addToWatchList(@PathVariable("user") String username,
			@PathVariable("firstName") String firstName, @PathVariable("lastName") String lastName) {
		Player player = pDao.findPlayerByName(firstName, lastName);
		if(player.getWatchList()==null) {
			User user = uDao.findUserByUsername(username);
			return wDao.addToWatchList(player, user);
		}
		return null;
	}
	
	
	
	@PostMapping(value= "/api/{user}/watchlist/create" )
	public WatchList createWatchList(@PathVariable("user") String username) {
		
		User aManager = uDao.findUserByUsername(username);
		return wDao.createWatchList(aManager);
	
	}
	
	@GetMapping(value="/api/{user}/watchlist/delete/{firstName}/{lastName}")
	public Player deletePlayerFromWatchList(@PathVariable("user") String username, 
			@PathVariable("firstName") String firstName, @PathVariable("lastName") String lastName) {
		
		Player player = pDao.findPlayerByName(firstName, lastName);
		player.setWatchList(null);
		return pRepo.save(player);
		
	}
	
	
	
	

	/*public List<Player> findAllPlayersForWatchList(WatchList aWatchlist) {	
		WatchList watchlist = wlRepo.findWatchListByName(aWatchlist.getName());
		return wlRepo.findAllPlayersOfWatchList(watchlist);
	}
	
	
	public List<WatchList> findAllWatchLists(){
		return (List<WatchList>) wlRepo.findAll();
		
		
	}
	
	
	
	public List<Player> findAllPlayersForManager(TeamManagerUser manager){
		TeamManagerUser aManager = mRepo.findManagerByUsername(manager.getUsername());
		WatchList watchlist = wlRepo.findWatchListOfManager(aManager);
		return wlRepo.findAllPlayersOfWatchList(watchlist);
		
		
	}
	
	
	public Player addToWatchList(ImportablePlayer player){
		Player aPlayer = playerRepo.findPlayerByName(player.getFirstName(), player.getLastName());
		WatchList watchlist = wlRepo.findWatchListByName(player.getWatchListName());
		aPlayer.setWatchList(watchlist);
		return playerRepo.save(aPlayer);
		
	}
	
	
	public WatchList deleteFromWatchList(ImportablePlayer player){
		WatchList watchlist = wlRepo.findWatchListByName(player.getWatchListName());
		List<Player> players = wlRepo.findAllPlayersOfWatchList(watchlist);
		players.remove(player);
		watchlist.setPlayers(players);
		return wlRepo.save(watchlist);	
	}
	
	
	*/
	
	

}
