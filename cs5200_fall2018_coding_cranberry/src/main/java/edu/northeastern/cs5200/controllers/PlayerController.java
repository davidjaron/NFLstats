package edu.northeastern.cs5200.controllers;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import edu.northeastern.cs5200.dao.PlayerDao;
import edu.northeastern.cs5200.models.Comment;
import edu.northeastern.cs5200.models.ImportableComment;
import edu.northeastern.cs5200.models.ImportablePlayer;
import edu.northeastern.cs5200.models.Player;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
public class PlayerController {

	@Autowired
	private PlayerDao dao;

	@JsonIgnore
	@GetMapping(value = "/api/player/find")
	public List<Player> findAll() {
		return dao.findPlayers();
	}
	
	@GetMapping(value = "/api/player/find/{firstName}/{lastName}")
	public Player findPlayer(@PathVariable("firstName") String first, @PathVariable("lastName") String last) {
		return dao.findPlayerByName(first, last);
	}


	@GetMapping(value = "/api/player/find/{name}")
	public List<Player> find(@PathVariable("name") String name) {
		return dao.playerSearch(name); 
	}
	
	@PutMapping(path = {"/api/player/likes/update/{first}/{last}"})
	public Player updateComment(@RequestBody Player player) {
		return dao.addLikeToPlayer(player.getFirstName(), player.getLastName());
	}
}
