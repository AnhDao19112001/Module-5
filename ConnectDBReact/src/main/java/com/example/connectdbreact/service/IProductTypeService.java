package com.example.connectdbreact.service;

import com.example.connectdbreact.model.ProductType;

import java.util.List;

public interface IProductTypeService {
    List<ProductType> findAll();
}
