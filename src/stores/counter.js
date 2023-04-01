import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCountriesStore = defineStore("countries", () => {
  const countries = ref([]);
  const data = ref([]);
  const namesCountries = ref([]);

  const getCountries = (countrie) => {
    if(countrie.length === 0){
      countries.value = [];
      return;
    }else{
    const countriesSearch = data.value.filter((p) =>
      p.name.common.toLowerCase().includes(countrie.toLowerCase())
    );
    countries.value = countriesSearch;
    }
  };

  const getNamesCountries = () => {
    const names = countries.value.map((p) => p.name.common);
    const parseNames = Object.values(names);
    namesCountries.value = parseNames;
  };

  const getAllData = async () => {
    const url = "https://restcountries.com/v3.1/all";
    const resp = await axios.get(url);
    const dat = resp.data;
    data.value = dat;
  };

  const clearData = () => {
    namesCountries.value = [];
  };

  return {
    countries,
    getCountries,
    getAllData,
    data,
    getNamesCountries,
    namesCountries,
    clearData
  };
});
