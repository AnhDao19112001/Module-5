package com.example.connectdbreact.service.impl;

import com.example.connectdbreact.model.Product;
import com.example.connectdbreact.repository.IProductRepository;
import com.example.connectdbreact.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository iProductRepository;

    @Override
    public Page<Product> findAll(Pageable pageable) {
        return iProductRepository.getAll(pageable);
    }

    @Override
    public void create(Product product) {
        iProductRepository.createProduct(product);
    }

    @Override
    public void update(Integer id) {
        iProductRepository.updateProduct(id);
    }

    @Override
    public void delete(Integer id) {
        iProductRepository.deleteProduct(id);
    }

    @Override
    public List<Product> search(String name) {
        return iProductRepository.searchProductName(name);
    }


}
