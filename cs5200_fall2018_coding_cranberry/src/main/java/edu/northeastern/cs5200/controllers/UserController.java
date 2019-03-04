package edu.northeastern.cs5200.controllers;


import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.northeastern.cs5200.dao.UserDao;
import edu.northeastern.cs5200.models.AdminUser;
import edu.northeastern.cs5200.models.FanUser;
import edu.northeastern.cs5200.models.ImportableUser;
import edu.northeastern.cs5200.models.PlayerUser;
import edu.northeastern.cs5200.models.TeamManagerUser;
import edu.northeastern.cs5200.models.User;
import edu.northeastern.cs5200.repositories.AdminRepository;
import edu.northeastern.cs5200.repositories.FanUserRepository;
import edu.northeastern.cs5200.repositories.PlayerUserRepository;
import edu.northeastern.cs5200.repositories.TeamManagerUserRepository;
import edu.northeastern.cs5200.repositories.UserRepository;

import javax.servlet.http.HttpSession;


@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
public class UserController {

	@Autowired
	private UserDao userDao;

	@PostMapping(value = "/api/user")
	public User postCustomer(@RequestBody ImportableUser aUser) {
		return userDao.createUser(aUser);
	}
	
	
//	@PostMapping(value = "/api/user")
//	public User postCustomer(@RequestBody ImportableUser aUser, HttpSession session) {
//		User user = userDao.createUser(aUser);
//		session.setAttribute("currentUser", user);
//		return user;
//	}

//	@GetMapping(value = "/api/admin/find")
//	public List<AdminUser> findAllAdminUsers() {
//		return userDao.findAllAdminUsers();
//	}
//

	@GetMapping(value = "/api/admin/find/{username}")
	public User findUserByUsername(@PathVariable("username") String username) {
		return userDao.findUserByUsername(username);
	}

	@GetMapping(value = "/api/admin/find")
	public List<User> findAll() {
		return userDao.findAll();
	}
	
	
	@GetMapping(value = "/api/player-user")
	public List<PlayerUser> findAllPlayerUser() {
		return userDao.findAllPlayerUsers();
	}

//	@GetMapping(value = "/api/player-user")
//	public List<PlayerUser> findAllPlayerUser(HttpSession session) {
//		User user = (User) session.getAttribute("currentUser");
//		return userDao.findAllPlayerUsers();
//	}
//
	
//	@GetMapping(value = "/api/fan")
//	public List<PlayerUser> findAllFanUser() {
//		return userDao.findAllPlayerUsers();
//	}
//
//
//	@GetMapping(value = "/api/team-manager")
//	public List<TeamManagerUser> findAllTeamManagerUser() {
//		return userDao.findAllTeamManagers();
//	}

	@PutMapping(path = {"/api/admin/update/"})
	public User updateUser(@RequestBody ImportableUser aUser) {
		return userDao.updateUser(aUser);
	}
	

	@DeleteMapping(path = { "/api/admin/delete/{id}" })
	public Optional<User> delete(@PathVariable("id") int id) {
		return userDao.delete(id);
	}

	
}

