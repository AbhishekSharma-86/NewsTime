import React,{ useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



const News = (props)=> {
  const[articles, setArticles] = useState([]);
  const[loading, setLoading] = useState(false);
  const[page, setPage] = useState(1);
  const[totalResults, setTotalResults] = useState(0);
  const updateNews = async()=> {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&pagesize=10&page=${page}&category=${props.category}&apiKey=${props.newsApi}`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData)
    let totalResults = parseData.totalResults;
    setTotalResults(totalResults);
    setArticles(parseData.articles);
    setLoading(false);
  }
  useEffect(() => {
    updateNews();
  }, [])
  // const componentDidMount= async ()=> {

  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&pagesize=10&page=${page}&category=${props.category}&apiKey=${props.newsApi}`;
  //   setLoading(true);
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   console.log(parseData)
  //   let totalResults = parseData.totalResults;
  //   setTotalResults(totalResults);
  //   setLoading(false);
  //   setArticles(parseData.articles);
  // }

  // handlePrev = async () => {
  //   this.setState({
  //     page: this.state.page - 1
  //   })
  //   this.updateNews();
  // }
  // handleNext = async () => {
  //   this.setState({
  //     page: this.state.page + 1
  //   })
  //   this.updateNews();
  // }
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&pagesize=10&page=${page+1}&category=${props.category}&apiKey=${props.newsApi}`;
    setPage(page+1);
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData)
    let totalResults = parseData.totalResults;
    setArticles(articles.concat(parseData.articles))
    setTotalResults(totalResults);
  };
    return (
      <div className='container my-3'>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
        <div className='row container'>
          {!loading && articles.map((ele) => {
            return (
              <div className='col-md-4 my-3' key={ele.url}>
                <Newsitem title={ele.title} newsUrl={ele.url} description={ele.description} imageUrl={ele.urlToImage} />
              </div>
            )
          })}
        </div>
        </InfiniteScroll>
      </div>
    )
  }

News.defaultProps = {
  country: 'in',
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string
}

export default News
