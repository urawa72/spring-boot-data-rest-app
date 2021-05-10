package com.example.accessingdatarest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final PersonRepository repository;

    @Autowired
	public DatabaseLoader(PersonRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repository.save(new Person("鈴木", "一郎"));
		this.repository.save(new Person("佐藤", "二郎"));
		this.repository.save(new Person("田中", "三郎"));
		this.repository.save(new Person("小林", "四郎"));
		this.repository.save(new Person("渡辺", "五郎"));
		this.repository.save(new Person("伊藤", "花子"));
		this.repository.save(new Person("中村", "涼子"));
		this.repository.save(new Person("加藤", "優子"));
		this.repository.save(new Person("山本", "和子"));
		this.repository.save(new Person("高橋", "良子"));
	}
}
