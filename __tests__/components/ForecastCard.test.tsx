import React from "react"
import "@testing-library/jest-dom"
import ForecastCard from "@/components/ForecastCard"
import { render, screen} from "@testing-library/react"


describe("search input", ()=>{
    it("should the weather card details properly",()=>{
        render(<ForecastCard data={[]} />)
        const element =  screen.getByTestId('weather-card')
        expect(element).toBeInTheDocument()
    })
    
}) 
