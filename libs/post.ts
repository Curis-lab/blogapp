export const getPosts = async()=>{
    try{
      const res = await fetch('http://localhost:3000/api/post',{
        cache: 'no-store',
        
      });
      if(!res.ok){
        throw new Error('Failed to fetch posts');
      }
      return res.json();
    }catch(error){
      console.log('Error fetching posts', error);
    }
  }
  