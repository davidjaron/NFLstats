package edu.northeastern.cs5200.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import edu.northeastern.cs5200.dao.LogDao;
import edu.northeastern.cs5200.models.Game;
import edu.northeastern.cs5200.models.GameLog;
import edu.northeastern.cs5200.models.Player;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
public class GameLogController {

	@Autowired
	private LogDao dao; 


	@GetMapping(value = "/api/player/log/{first}/{last}")
	public List<GameLog> findLogsForPlayer(@PathVariable("first")String first, @PathVariable("last")String last) {
		return dao.getLogsForPlayer(first, last);
	}
	
	/*@GetMapping(value = "/api/{player}/find/{game}")
	public GameLog findPlayer(@PathVariable("player") Player player, @PathVariable("game") Game game) {
		return dao.findLogForGame(player, game);
	}*/

}
