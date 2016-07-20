package com.example.helloendpoints;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Named;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiMethod.HttpMethod;

@Api(name = "items", version = "v1", clientIds = { Constants.WEB_CLIENT_ID })
public class ItemAPI {

	public static ArrayList<Item> greetings = new ArrayList<Item>();

	static {
		greetings.add(new Item("The best story", "A story about the best"));
		greetings.add(new Item("The worst story", "A story about the worst"));
	}

	@ApiMethod(name = "add", path = "add/{title}/{description}", httpMethod = HttpMethod.GET)
	public Item addItem(@Named("title") String title, @Named("description") String description) {
		Item newItem = new Item(title, description);
		greetings.add(newItem);
		return newItem;
	}

	@ApiMethod(name = "get", path = "get", httpMethod = HttpMethod.GET)
	public List<Item> getItems() {
		return greetings;
	}

	@ApiMethod(name = "prout", path = "prout", httpMethod = HttpMethod.GET)
	public List<Item> proutItems() {
		return greetings;
	}

}