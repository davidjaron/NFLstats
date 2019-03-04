package edu.northeastern.cs5200;
import edu.northeastern.cs5200.dao.CommentDao;
import edu.northeastern.cs5200.dao.WatchListDao;
import edu.northeastern.cs5200.models.Comment;
import edu.northeastern.cs5200.models.GameLog;
import edu.northeastern.cs5200.models.ImportableComment;
import edu.northeastern.cs5200.models.Player;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import java.util.List;


import edu.northeastern.cs5200.dao.GameDao;
import edu.northeastern.cs5200.dao.LogDao;
import edu.northeastern.cs5200.dao.PlayerDao;
import edu.northeastern.cs5200.dao.TeamDao;
import edu.northeastern.cs5200.dao.UserDao;
import edu.northeastern.cs5200.models.TeamManagerUser;
import edu.northeastern.cs5200.models.User;
import edu.northeastern.cs5200.models.WatchList;
import edu.northeastern.cs5200.repositories.CommentRepository;
import edu.northeastern.cs5200.repositories.TeamManagerUserRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
public class Cs5200Fall2018CodingCranberryApplicationTests {
  @Autowired
  private GameDao gameDao;
  @Autowired
  private LogDao logDao;
  @Autowired
  private TeamDao teamDao;
  @Autowired
  private PlayerDao playerDao;
  @Autowired
  private CommentDao cDao;
  @Autowired
  private WatchListDao watchListDao;
  @Autowired
  private TeamManagerUserRepository teamManagerUserRepository;

  @Autowired
  private UserDao uDao;
  
  @Test
  public void empty() {
	  
    //List<Comment> test = cDao.findCommentsAboutPlayer("Stephen", "Anderson");
    //System.out.println(test);
    //List<Comment> comments = cDao.findCommentsAboutPlayer("Stephen", "Anderson");

	  /*
    TeamManagerUser user = teamManagerUserRepository.findManagerByUsername("p");
	  WatchList watchList = watchListDao.createWatchList(user);
	  System.out.println(watchList);
	  */
	  
	  
	  /*
	  List<Comment> comments = cDao.findCommentsByUser("David");
	  System.out.println(comments.get(0).getPlayer());
	 */
	  
	  /*
	  Player player = playerDao.findPlayerByName("Andy", "Jones");
	  System.out.println(player.getFirstName());
	 
	  User aManager = uDao.findUserByUsername("h");
	  System.out.println(aManager.getFirstName());
	  
	 WatchList watch = watchListDao.addToWatchList(player, aManager);
	 // System.out.println(watch.getManager().getUsername());
	  
	 
	  */
	  
  }
  

  @Test
  public void populate(){

//    gameDao.truncate();
//    logDao.truncate();
//    teamDao.truncate();
//    playerDao.truncate();
    CSVReader reader = new CSVReader();
    reader.populate(gameDao, logDao, playerDao, teamDao);
  }


  /*
  @Test
  public void test(){
    System.out.println(Float.parseFloat("1"));
  }

  @Test
  public void test2(){
    Game game = new Game();
    game.setDate("1/1/2018");
    game.setLocation("David");
    Game test = gameDao.findGame(game);
    System.out.println(test.getLocation());

  }

  @Test
  public void deleteTest(){
    gameDao.truncate();
    logDao.truncate();
    teamDao.truncate();
    playerDao.truncate();
  }
*/

}

