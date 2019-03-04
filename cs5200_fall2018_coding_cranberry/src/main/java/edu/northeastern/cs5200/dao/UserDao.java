package edu.northeastern.cs5200.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import edu.northeastern.cs5200.models.AdminUser;
import edu.northeastern.cs5200.models.FanUser;
import edu.northeastern.cs5200.models.ImportableUser;
import edu.northeastern.cs5200.models.Player;
import edu.northeastern.cs5200.models.PlayerUser;
import edu.northeastern.cs5200.models.TeamManagerUser;
import edu.northeastern.cs5200.models.User;
import edu.northeastern.cs5200.models.WatchList;
import edu.northeastern.cs5200.repositories.AdminRepository;
import edu.northeastern.cs5200.repositories.FanUserRepository;
import edu.northeastern.cs5200.repositories.PlayerRepository;
import edu.northeastern.cs5200.repositories.PlayerUserRepository;
import edu.northeastern.cs5200.repositories.TeamManagerUserRepository;
import edu.northeastern.cs5200.repositories.UserRepository;

@Service
public class UserDao {

	@Autowired
	UserRepository userRepo;
	
	@Autowired
	PlayerUserRepository playerUserRepo;
	
	@Autowired
	TeamManagerUserRepository teamManagerRepo;
	
	@Autowired
	FanUserRepository fanRepo;
	
	@Autowired
	AdminRepository adminRepo;
	
	@Autowired
	PlayerRepository playerRepo;
	
	@Autowired
	WatchListDao wlDao;

	
	
	public User createUser(ImportableUser aUser) {
		
		if(aUser.getUserType().equals("Player")) {
			return playerUserRepo.save(new PlayerUser(aUser.getUsername(), aUser.getPassword(),
				aUser.getFirstName(), aUser.getLastName(), aUser.getCity(), aUser.getState()));
		
		} else if (aUser.getUserType().equals("Fan")) {
			return fanRepo.save(new FanUser(aUser.getUsername(), aUser.getPassword(),
				aUser.getFirstName(), aUser.getLastName(), aUser.getCity(), aUser.getState()));	
		
		} else if (aUser.getUserType().equals("Team")) {
			return teamManagerRepo.save(new TeamManagerUser(aUser.getUsername(), aUser.getPassword(),
				aUser.getFirstName(), aUser.getLastName(), aUser.getCity(), aUser.getState()));	
	
		} else if (aUser.getUserType().equals("Admin")) {
			return adminRepo.save(new AdminUser(aUser.getUsername(), aUser.getPassword(),
				aUser.getFirstName(), aUser.getLastName(), aUser.getCity(), aUser.getState()));
		}
		
		//Basic-user
		return userRepo.save(new User(aUser.getUsername(), aUser.getPassword(),
			aUser.getFirstName(), aUser.getLastName(), aUser.getCity(), aUser.getState()));
	

	}
	
	
	/**
	 * 
	 * @return all users
	 */
	public List<User> findAll() {
		return (List<User>) userRepo.findAll();
	}




	public User updateUser(ImportableUser aUser) {

		Optional<User> user1 = userRepo.findById(aUser.getId());
		User user = user1.get();
		user.setUsername(aUser.getUsername());
		user.setPassword(aUser.getPassword());
		user.setFirstName(aUser.getFirstName());
		user.setLastName(aUser.getLastName());
		user.setCity(aUser.getCity());
		user.setState(aUser.getState());

		return userRepo.save(user);
	}
	
		
	/**
	 * Delete an user 
	 * @param id userId
	 * @return the one has been deleted.
	 */
	public Optional<User> delete(int id) {
		Optional<User> aUser = userRepo.findById(id);
		if (aUser != null) {
			User user = aUser.get();
			if(user instanceof TeamManagerUser) {
				WatchList watchList = user.getWatchList();
				List<Player> players = wlDao.findAllPlayersForManager((TeamManagerUser)user);			
				for(Player player: players) {
					player.setWatchList(null);
					playerRepo.save(player);
				}	
			}
			userRepo.deleteById(user.getId());
		}
		return aUser;
	}
	
	
	/**
	 * 
	 * @return all player users
	 */
	public List<PlayerUser> findAllPlayerUsers() {
		return (List<PlayerUser>) playerUserRepo.findAll();
	}
	
	
	/**
	 * 
	 * @return all team manager users
	 */
	public List<TeamManagerUser> findAllTeamManagers() {
		return (List<TeamManagerUser>) teamManagerRepo.findAll();
	}
	
	
	
	
	
	

	/**
	 * 
	 * @return all fan users
	 */
	public List<FanUser> findAllFanUsers() {
		return (List<FanUser>) fanRepo.findAll();
	}

	
	/**
	 * 
	 * @return all admins
	 */
	public List<AdminUser> findAllAdminUsers() {
		return (List<AdminUser>) adminRepo.findAll();
	}
	
	public User findUserByUsername(String username){
		return this.userRepo.findUserByUsername(username);
	}

}
