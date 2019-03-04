package edu.northeastern.cs5200.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import edu.northeastern.cs5200.dao.TeamDao;
import edu.northeastern.cs5200.models.Player;
import edu.northeastern.cs5200.models.Team;


@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
public class TeamController {

	@Autowired
	private TeamDao dao; 


	@GetMapping(value = "/api/team/find")
	public List<Team> findAll() {
		return dao.findTeams();
	}
	
	/*@GetMapping(value = "/api/team/find/{name}")
	public List<Player> find(@PathVariable("name") String name) {
		Team team = dao.findTeam(name); 
		if (team != null) {
			return dao.findPlayers(team);
		}
		return null; 
	}

	
	@DeleteMapping(path = { "/api/team/delete/{name}" })
	public Team delete(@PathVariable("name") String name) {
		Team team = dao.findTeam(name);
		if (team != null) {
			dao.deleteTeam(team);
		}
		return team;
	}*/

	@PostMapping(path = { "/api/team/create" })
	public Team create(@RequestBody Team team) {
		return dao.createTeam(team);
	}
	
}