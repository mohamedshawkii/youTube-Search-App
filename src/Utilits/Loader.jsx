

const Loader = ({NewData})=>{
    {NewData && (
        <div>
          {NewData ? null : (
            <div className="bg-[##BDFF38] rounded-lg py-1 px-6 text-white">
              <p>Loading</p>
            </div>
          )}
        </div>
      )}
}
export default Loader