import React from 'react'
import Link from '../common/Link'

const AuthFooter = () => {
    return (
        <div className='py-2'>
            <p>Already have an account? <Link className='text-blue-b1 text-md' href='/'>Sign in</Link>. 
                Read our <Link className='text-blue-b1 text-md' href='/'>Terms Policy</Link> - 
                <Link className='text-blue-b1 text-md' href='/'> Privacy Policy</Link> -
                <Link className='text-blue-b1 text-md' href='/'> FAQs</Link>
            </p>
        </div>
    )
}

export default AuthFooter