package edu.northeastern.cs5200.models;

public class ImportableComment extends Comment{
  private String username;
  private String playerFirstName;
  private String playerLastName;
  private String originalContent;
  
  
  //private int likes;
  //private String content;
  
  
  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPlayerFirstName() {
    return playerFirstName;
  }

  public void setPlayerFirstName(String playerFirstName) {
    this.playerFirstName = playerFirstName;
  }

  public String getPlayerLastName() {
    return playerLastName;
  }

  public void setPlayerLastName(String playerLastName) {
    this.playerLastName = playerLastName;
  }
/*
public int getLikes() {
	return likes;
}

public void setLikes(int likes) {
	this.likes = likes;
}
*/

public String getOriginalContent() {
	return originalContent;
}

public void setOriginalContent(String originalContent) {
	this.originalContent = originalContent;
}
}
