import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const updateActiveTabId = () => {
    updateTabId(tabId)
  }
  const className = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${className}`}
        onClick={updateActiveTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
