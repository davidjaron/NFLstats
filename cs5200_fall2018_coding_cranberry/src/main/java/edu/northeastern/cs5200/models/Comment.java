package edu.northeastern.cs5200.models;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonValue;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Transient;

import org.hibernate.annotations.CascadeType;

@Entity
public class Comment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String content;
	
	private int likes;
	
	@JsonIgnore
	@OneToMany(mappedBy="commentReplied")
	List<Comment> replies = new ArrayList<>();
	
	@JsonIgnore
	@ManyToOne
	Comment commentReplied;
	

	@JsonIgnore
	@ManyToOne
	private Topic topic;
	

	@JsonIgnore
	@ManyToOne
	private User user;


	@JsonIgnore
	@ManyToOne
	private Player player;

//	@Transient
//	private String username;
//
//	@Transient
//	private String playerFirstName;
//
//	@Transient
//	private String playerLastName;*/

	@Transient
	public String getUserName(){
		return this.getUser().getUsername();
	}

	
	//@JsonView
	/*
	@Transient
	@JsonGetter(value = "transientProperty")
	public String getPlayerFirstName(){
		//return this.getPlayer().getFirstName();
		return "Stephen";
	}
	*/
	
	/*
	//@JsonView
	@Transient
	public String getPlayerLastName(){
		return this.getPlayer().getLastName();
		//return "Anderson";
	}
	
*/

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getLikes() {
		return likes;
	}

	public void setLikes(int likes) {
		this.likes = likes;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Topic getTopic() {
		return topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Player getPlayer() {
		return player;
	}

	public void setPlayer(Player player) {
		this.player = player;
	}

	public List<Comment> getReplies() {
		return replies;
	}

	public void setReplies(List<Comment> replies) {
		this.replies = replies;
	}

	public Comment getCommentReplied() {
		return commentReplied;
	}

	public void setCommentReplied(Comment commentReplied) {
		this.commentReplied = commentReplied;
	}


}
