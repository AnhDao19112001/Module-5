package com.example.connectdbreact.service;

import com.example.connectdbreact.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface IProductService {

    Page<Product> findAll(Pageable pageable);

    void create (Product product);
    void update (Integer id);
    void delete (Integer id);
    List<Product> search (String name);
}
